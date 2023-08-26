import { useState } from 'react'
import styles from '../css/tab.module.css'

const Tabs = (props) => {
    const [tabName, setTabName] = useState("");
    const [tabContent, setTabContent] = useState("")
    const [tabList, setTabList] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);


    const onTabHandle = (e) => {
        e.preventDefault();
        let tabMaterial = {
            tabName,
            tabContent
        }
        setTabList([...tabList, tabMaterial]);
    }

    return (
        <div>
            <h1>Let's Make Some Tabs!</h1>
            <form onSubmit={onTabHandle}>
                <label style={{padding: 20, margin:10}}>
                    Name:
                    <input type="text" onChange={(e) => setTabName(e.target.value)}/>
                </label>
                <label>
                    Content:
                    <textarea type="text" onChange={(e) => setTabContent(e.target.value)}/>
                </label>
                <input type='submit'value="Submit Your Tab" style={{margin:5, color:'black'}}/>
            </form>
            <hr />
            <div>
                {
                    tabList.map((item, index) => {
                        return(<div onClick = {() => setCurrentTab(index)} style={{display:'inline-block', width:150, height: 20, margin: 10, fontSize: 'large', border: 'dotted black 3px', cursor:'pointer' }}>{item.tabName})</div>)
                    }
                    )
                }
                {
                    tabList[currentTab] ? 
                    <div className={styles.contentStyles}>{tabList[currentTab].tabContent}</div> :
                    null
                }
            </div>
        </div>
    )
}
export default Tabs;