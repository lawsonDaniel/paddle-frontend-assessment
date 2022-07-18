import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Style from '../../styles/github.module.css'
import Navlight from '../../common/Navlight'
import Footerlight from '../../common/Footerlight'

const Index = () => {
    //empty state to setdat 
    const [data,setdata] = useState([])
   
    
    // get days 
    const getDifferenceInDays = (now: any, dateCreated: any) => {
        let previousDate: any = new Date(dateCreated);
        const diffInMs = Math.abs(now - previousDate);
        return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    };
    
    useEffect(()=>{
        axios.get(`https://api.github.com/search/repositories?q=created:>2022-04-13&sort=stars&order=desc`).then((res)=>{
            setdata(res.data.items)
        }).catch((err)=>{
              console.error(err)
        })
    },[])
   
    let Now = new Date();
   
  return (
    <>
    <Navlight/>
    <div className={Style.container}>
        
      {
        data.map((a:any)=>{
            return (
            <>
                <div className={Style.card}>
                    <div className={Style.img}>
                        <img src={a.owner.avatar_url} alt="img"/>
                    </div>
                    <div className={Style.info}>
                        <h1>{a.name}</h1>
                        <p>{a.description}</p>
                        <div className={Style.star}>
                        <div className={Style.starcontainer}>Stars: {a.stargazers_count}</div>
                        <div className={Style.starcontainer}>Issue: {a.open_issues_count }</div>
                    <div>Submitted {getDifferenceInDays(Now, a.created_at)} days ago by {a.full_name.split("/")[0]} </div>
                        </div>
                    </div>
                </div>
            </>
            )
        })
      }
     
    </div>
    <Footerlight/>
    </>
  )
}

export default Index


