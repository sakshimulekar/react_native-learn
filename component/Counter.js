import React, { useState } from 'react'
import { View,Text,Button } from 'react-native'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <View>
      
      <Button title='+' onPress={()=>setCount((pre)=>pre+1)}/>
      <Text>Count : {count}</Text>
      <Button title='-' onPress={()=>setCount((pre)=>pre-1)} disabled={count<=0}/>
    </View>
  )
}

export default Counter
