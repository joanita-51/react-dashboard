import React from 'react'
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';


const Editor = () => {
  return (
    <div>
      <Header category='App' title='Editor'/>
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services = {[HtmlEditor, Toolbar,Image,Link,QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor