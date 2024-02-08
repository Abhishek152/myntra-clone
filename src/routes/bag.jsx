import { useSelector } from "react-redux";
import Bagitem from "../components/bagitem";
import Bagsummary from "../components/bagsummary";

const Bag = () => {
  const bagItems = useSelector(store => store.bag);
  const items = useSelector(store => store.items);
  const finalitem = items.filter(val => {
    const index = bagItems.indexOf(val.id);
    return index>=0;
  });
  return<>

<main>
<div className="bag-page">
  <div className="bag-items-container">
  {finalitem.map(item =><Bagitem item = {item}/> )}
  </div>
<Bagsummary/>

</div>
</main>
</>
}

export default Bag;