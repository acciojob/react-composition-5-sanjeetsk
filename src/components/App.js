
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const tabs = [
    {title:"Tab 1", content:"Content for Tab 1"},
    {title:"Tab 2", content:"Content for Tab 2"},
    {title:"Tab 3", content:"Content for Tab 3"},
  ]

  const tabs2 = [
    {title:"Tab A", content:"Content for Tab A"},
    {title:"Tab B", content:"Content for Tab B"},
    {title:"Tab C", content:"Content for Tab C"},
  ]

  return (
    <div>
        <Tabs tabs={tabs} key="set1"/>
        <Tabs tabs={tabs2} key="set2"/>

    </div>
  )
}

const Tabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) =>{
    setActiveTab(index);
  }

  return(
    <div>
      {
        tabs.map((tab, index) =>(
          <li 
            key={index}
            onClick={() => handleClick(index)}
          >{tab.title}</li>
        ))
      }
      <h3>{tabs[activeTab].content}</h3>
    </div>
  )
}

export default App
