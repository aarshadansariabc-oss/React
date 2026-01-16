import RightCard from './RightCard'
const Right = (props) => {
  console.log(props)
  return (
    <div id='right' className="h-full overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10">
     {props.user.map(function(elem, idx){
      return(
        <RightCard  id = {idx} img = {elem.img} tag = {elem.tag}/>
      )
     })}
    </div>
  );
}
export default Right
