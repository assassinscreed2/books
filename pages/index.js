import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Divider} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from '../components/Header'
import Book from '../components/Book'

export default function Index() {
  const theme = useTheme();

  const src = ["/aimage.jpg","/bimage.jpg","/cimage.jpg"];
  const detail = ["The new york series here part 1 for all languages now avaiable for buy"];

  return (<>
        <Header />
          <Book pic={src[0]} detail={detail[0]}/>
        <Divider style={{marginTop:"2em"}}/>
          <Book pic={src[1]} detail={detail[0]}/>
        <Divider style={{marginTop:"2em"}}/>
          <Book pic={src[2]} detail={detail[0]}/>
        </>
  );
}