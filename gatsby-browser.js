
import React from "react"
import { ConfigProvider } from 'antd';
import NetWorkContextProvider from "./src/context/NetWorkContextProvider"
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <NetWorkContextProvider>
    <ConfigProvider>
    {element}
    </ConfigProvider>
  </NetWorkContextProvider>    
)