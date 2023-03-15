import React from 'react';
import s from './style.module.css'
import PhotoBox from '../../components/PhotoBox';
import Title from '../../components/Title';
import TopicsItem from '../../components/TopicsItem';
import ArticleItem from '../../components/ArticleItem';
import img from './image.png'
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'

const ArticlesPage = () => {
    const topics = [
        {number: '01', topic: 'Use HDFS & Map Reduce for storing & analyzing data at scale.'},
        {number: '02', topic: 'Consume streaming data using Spark Streaming, Flink, and Storm.'},
        {number: '03', topic: 'Choose an appropriate data storage technology for your application'},
        {number: '04', topic: 'Analyze non-relational data using HBase, Cassandra, and MongoDB.'},
    ]
    const articles = [
        {   
            id: 1, 
            img: image1, 
            title: 'Significant reading has more info number',
            descr: 'Override the digital divide with additional clickthroughs from DevOps for real-time schemas.',
            date: 'October 6, 2021'
        },
        {   
            id: 2, 
            img: image2, 
            title: 'Many variations of pass majority have suffered',
            descr: 'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.',
            date: 'October 6, 2021'
        },
        {   
            id: 3, 
            img: image3, 
            title: 'Words which don’t look even slightly believable',
            descr: 'Podcasting operational change management inside of workflows to establish a framework.',
            date: 'October 6, 2021'
        }
    ]

    return (
        <div className={s.page}>
            <Title text={'What Will You Learn?'}/>
            <div className={s.container_top}>
                <div className={s.topics_container}>
                    {
                        topics.map(item => <TopicsItem key={item.number} {...item}/>)
                    }
                </div>
                <PhotoBox img={img}/>
            </div>
            <div className={s.container_bottom}>
                <Title text={'Articles & Resources'}/>
                <div className={s.articles}>
                    {
                        articles.map(item => <ArticleItem key={item.id} {...item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;