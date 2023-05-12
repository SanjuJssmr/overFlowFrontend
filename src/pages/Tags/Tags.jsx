import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagslist = [
        {
        id: 1,
        tagName: "React",
        tagDesc:"React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. "
    },
        {
            id: 2,
            tagName: "Tailwind",
            tagDesc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override "
        },
        {
            id: 3,
            tagName: "Threejs",
            tagDesc: "Three.js is an open-source JavaScript library that you can use to create dynamic and interactive websites with 2D and 3D graphics. With Three.js, you can render 3D graphics directly inside the browser"
        },
        {
            id: 4,
            tagName: "Solidity",
            tagDesc: "Solidity is a brand-new programming language created by Ethereum which is the second-largest market of cryptocurrency by capitalization, released in the year 2015 and led by Christian Reitwiessner"
        },
        {
            id: 5,
            tagName: "Web3js",
            tagDesc: "Web3.js enables you to fulfill the second responsibility: developing clients that interact with The Etherem Blockchain. It is a collection of libraries that allow you to perform actions like send Ether from one account to another"
        },
        {
            id: 6,
            tagName: "Truffle",
            tagDesc: "Truffle is a world-class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier"
        },
        {
            id: 7,
            tagName: "Ganache",
            tagDesc: "Ganache is a personal blockchain for rapid Ethereum and Filecoin distributed application development. You can use Ganache across the entire development cycle; enabling you to develop, deploy"
        },
        {
            id: 8,
            tagName: "Metamask",
            tagDesc: "MetaMask is a browser plugin that functions as an Ethereum wallet, is simple to install, and doesn’t require any additional plug-ins. It’s compatible with all major browsers, including Chrome and Firefox"
        },
        {
            id: 9,
            tagName: "Blockchain",
            tagDesc: "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding)"
        },
        {
            id: 10,
            tagName: "Ethereum",
            tagDesc: "Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Smart contracts allow participants to transact with each other without a trusted central authority"
        }


    ]
    return (
        <div className='sidebar'>
            <LeftSideBar />
            <div className="maintag">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.  </p>
                <p className='tags-p'> Using the right tags makes it easier for others to find and answer your question!</p>

                <div className="tags-list-container">
                    {
                        tagslist.map((tag) => (
                            <TagsList tag={tag} key={tag.id}/>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags