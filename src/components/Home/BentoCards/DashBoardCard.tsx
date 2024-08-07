import BentoCard from './BentoCard'
import CodeStructure from './CodeBg'

const DashBoardCard = () => {
  return (
    <BentoCard className="group/stack col-span-3 row-span-2 h-56 p-4 lg:p-6">
      {' '}
      <CodeStructure linesCount={10} />
      <div className=""></div>
    </BentoCard>
  )
}
export default DashBoardCard
