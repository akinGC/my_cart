import {configureStore} from '@reduxjs/toolkit'
import showcrt from './Showcrt'
import Array from './Array'

const store = configureStore({
    reducer:{crt:showcrt,arr:Array}
})

export default store