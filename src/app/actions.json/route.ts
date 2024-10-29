import { createActionHeaders, type ActionsJson } from '@solana/actions'

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map blinks routes to an action
      {
        pathPattern: '/blink',
        apiPath: '/api/actions',
      },
    ],
  }

  return Response.json(payload, {
    headers: createActionHeaders(),
  })
}

export const OPTIONS = GET
