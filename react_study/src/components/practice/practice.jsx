import React, { useState, useEffect } from 'react'

export default function Practice() {
    
    const [title, setTitle] = useState('제목입니다.');
    const [id, setId] = useState('아이디입니다.');
    const [pw, setPw] = useState('패스워드입니다.');
    const titles = [
        {id:1, value:"title"},
        {id:2, value:"ID"},
        {id:3, value:"PW"}
    ]
    const [titleName, setTitleName] = useState(titles);

    const Container = ({children}) => {
        return <div>{children}</div>
    }
    const Title = () => {
        return <div>{titleName[0].value}: {title} <br/></div>
    }
    const ID = () => {
        return <div>{titleName[1].value}: {id}<br/></div>
    }
    const PW = () => {
        return <div>{titleName[2].value}: {pw}<br/></div>
    }

  return (
    <Container>
        <Title/>
        <ID/>
        <PW/>
    </Container>
  )
}
