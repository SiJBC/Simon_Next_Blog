import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'


export const postFetch = async (queryString) => {
    const postData = await axios.get(queryString)
    const {data} = postData
    return data
}

export const getNavbar = async () => {
    const dataDump = await fetch('http://www.simoncolman.com/wp-json/wp/v2/posts/')
    const data = await dataDump.json()
    return (data.map(({id, link, title:{rendered} }) => {
        return (
            {id, link, rendered}
        )
    }))
} 