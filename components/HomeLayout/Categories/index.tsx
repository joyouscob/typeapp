import React from 'react'
import CategoryContent from './CategoryContent'
import { VideoData } from './data'
import { Container, Wrapper } from './styles'

function Categories() {
    return (
        
     
        <Container>
            {VideoData?.map((item) => (
                //render component with relevant data passed in as props
                <Wrapper key={item.id}>
                    <CategoryContent
                        video={item?.video}
                        defaultImage={item?.imageUrl}
                        name={item?.name}
                    />  
                </Wrapper>
                ))
            }
            
    </Container>
  )
}

export default Categories