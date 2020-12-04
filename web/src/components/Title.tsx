import React from "react";
import { FcKey } from 'react-icons/fc';

import '../styles/components/title.css'

interface Param{
    title: string
}

export default function Title(params: Param)
{
    const {title} = params
    return(
        <div id='title_pane'>
            <label><FcKey/>{title}</label>
        </div>
    )
}