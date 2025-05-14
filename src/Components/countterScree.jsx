import React, { useState } from "react";
import { TouchableOpacity, View,Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/Slice/counterSlice";
import { State } from "react-native-gesture-handler";
// import { increment, decrement, reset } from "../redux/Slice/counterSlice";



const CounterScreen =()=>{

    const count = useSelector(([...state])=> state.counter.value);
    const dispatch = useDispatch();

    // const [count, setCount] = useState = (0);

    const handleAdd =(state) =>{
        dispatch(increment(state))
    }


    const handleDecre =(state) =>{
        dispatch(decrement(state));
    }

    const handleReset =(state) =>{

        dispatch(reset(state));
    }

    return(

        

        <View>
            <Text>
             {count}
            </Text>


<View style={{flexDirection:'row'}}>

            <TouchableOpacity onPress={handleAdd}>
                <Text>+</Text>
            </TouchableOpacity>

<TouchableOpacity onPress={handleDecre}>
                <Text>-</Text>
            </TouchableOpacity>


 <TouchableOpacity onPress={handleReset}>
                <Text>reset</Text>
            </TouchableOpacity>
</View>


        </View>
    )
}


export default CounterScreen