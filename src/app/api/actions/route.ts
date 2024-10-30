import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
} from '@solana/actions'
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'

// GET request handler
export function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const baseURL = new URL(`/api/actions`, requestUrl.origin).toString()
  const logoURL = new URL(`/images/avatar.jpg`, requestUrl.origin).toString()

  const response: ActionGetResponse = {
    icon: logoURL,
    description:
      "I'm Rohit Singh Rawat — check out my unique Solana Blink, a one-of-a-kind digital art piece!",
    label: 'Check Out',
    title: 'Buy me an NFT',
    links: {
      actions: [
        {
          href: `${baseURL}?amount=0.5`,
          label: '0.5 SOL',
          type: 'transaction',
        },
        { href: `${baseURL}?amount=1`, label: '1 SOL', type: 'transaction' },
        { href: `${baseURL}?amount=5`, label: '5 SOL', type: 'transaction' },
        {
          href: `${baseURL}?amount={amount}`,
          label: 'Send Custom SOL',
          type: 'transaction',
          parameters: [
            { label: 'Enter Amount', name: 'amount', type: 'number' },
          ],
        },
      ],
    },
  }
  return Response.json(response, { headers: ACTIONS_CORS_HEADERS })
}

// POST request handler
export async function POST(request: Request) {
  const connection = new Connection(clusterApiUrl('mainnet-beta'))
  const requestBody: ActionPostRequest = await request.json()
  const amount = parseFloat(
    new URL(request.url).searchParams.get('amount') ?? '0'
  )
  const walletAddress = process.env.WALLET_ADDRESS

  if (!walletAddress)
    throw new Error('WALLET_ADDRESS environment variable missing')

  const myPublicKey = new PublicKey(walletAddress)
  let account: PublicKey
  try {
    account = new PublicKey(requestBody.account)
  } catch (err) {
    return Response.json({ error: 'Invalid account provided' }, { status: 400 })
  }

  const solTransferTransaction = SystemProgram.transfer({
    fromPubkey: account,
    toPubkey: myPublicKey,
    lamports: amount * LAMPORTS_PER_SOL,
  })

  const txn = new Transaction().add(solTransferTransaction)
  txn.feePayer = account
  txn.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

  const transaction = txn
    .serialize({ verifySignatures: false })
    .toString('base64')
  const response: ActionPostResponse = {
    transaction,
    type: 'transaction',
    message: 'Thanks for the Solana! You just leveled up my pixel party!',
  }

  return Response.json(response, { headers: ACTIONS_CORS_HEADERS })
}

// OPTIONS request handler
export function OPTIONS() {
  return Response.json(null, { headers: ACTIONS_CORS_HEADERS })
}
