import React from 'react'
import ChatBot from 'react-simple-chatbot'
import './bot.css'
import { ThemeProvider } from 'styled-components';
const Chatbot = () => {

    const theme = {
        background: '#dbf1ff',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#ef8236',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#ef8236',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    const steps = [

        {

            id: "Greet",

            message: "Hello, Welcome to our StockOverflow Clone",

            trigger: "Done",

        },

        {

            id: "Done",

            message: "Please enter your name!",

            trigger: "waiting1",

        },

        {

            id: "waiting1",

            user: true,

            trigger: "Name",

        },

        {

            id: "Name",

            message: "Hi {previousValue}, Please select your doubts from below tech's",

            trigger: "issues",

        },

        {

            id: "issues",

            options: [
                {

                    value: "Html",

                    label: "Html",

                    trigger: "Html",

                },
                {

                    value: "Css",

                    label: "Css",

                    trigger: "Css",

                },

                {

                    value: "Mern",

                    label: "Mern",

                    trigger: "Mern",

                },

                {

                    value: "React",

                    label: "React",

                    trigger: "React",

                },

                { value: "Angular", label: "Angular", trigger: "Angular" },

            ],

        },

        {

            id: "React",

            message:

                "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development.",

            end: true,

        },

        {

            id: "Angular",

            message:

                "Angular is a modern MVVC framework and platform that is used to build enterprise Single-page Web Applications (or SPAs) using HTML and TypeScript.",

            end: true,

        },
        {

            id: "Html",

            message:

                "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for Web pages. HTML elements are the building blocks of HTML pages.",

            end: true,

        },
        {

            id: "Css",

            message:

                "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.",

            end: true,

        },
        {

            id: "Mern",

            message:

                "MERN Stack is a collection of powerful technologies and robust, used to develop scalable master web applications comprising backend, front-end, and database components. It is JavaScript that is used for the faster and easier development of full-stack web applications.",

            end: true,

        },

    ]; 
  return (
      <section className='bot' >

          <div className='bots'>
              <ThemeProvider theme={theme}>
                  <ChatBot steps={steps} headerTitle=" Simple ChatBot  -  StockOverFlow" />
              </ThemeProvider>
          </div>
          
      </section>
  )
}

export default Chatbot
