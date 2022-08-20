import "./pList.scss";

export default function PList({id,title, active, setSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
