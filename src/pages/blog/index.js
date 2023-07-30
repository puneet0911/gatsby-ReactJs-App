
import * as React from "react"
import Headers from "../../components/layouts/Header";
import { Box, Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './blog.css';
import Footer from "../../components/layouts/Footer";

const BlogPage = () => { 
    return (
        <main>
            <Headers />
            <Container>
                <h1>Blog</h1>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" />
                   <p style={{lineHeight:"45px"}}> May 1 Remy Sharp </p>
                </Stack>
                <Box>
                    <h1>The one thing I would tell to my 16 year old self</h1>
                    <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</h4>
                </Box>
                <Box>
                    <img src="https://dummyimage.com/1080x640/a1a1a1/fff" />
                </Box>
                <Box>
                    <h3>What Is Meant By Lorem Ipsum In Website?</h3>
                    <p>The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website. </p>
                    <p>Basically, this tool is used to create dummy content on the website when it’s new. </p>

                    <h3>Why Lorem Ipsum Is Used?</h3>
                    <p>It helps the designer plan where the content will sit. It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. </p>

                    <p>Sometimes, the reader gets distracted while creating or working on the website. That’s why this language is important. </p>

                    <p>This tool makes the work easier for the webmaster. </p>

                    <h3>How Lorem Ipsum Can Be Used? </h3>
                    <p>When using Lorem Ipsum for creating dummy content for your newly created website, you can select the text formats you want from the tool. Like, words, sentences, or paragraphs. </p>

                    <p>Then, you can select whether you want HTML markup in your dummy content or not </p>

                    <p>Then, you can choose the number of words and paragraphs for your dummy content and execute the plan accordingly.</p>

                    <p>You can use this tool at incrementors.com for free. </p>

                    <h3>How Can I Use Lorem Ipsum Tool For My Website?</h3>
                    <p>You can click on the ‘item to generate’ column and select the format you want content in. </p>

                    <p>Below that, you can select if you want an HTML tag in your content or not</p>

                    <p>After that, you can choose how many paragraphs you want in the ‘how many items to generate’ column.</p>

                    <p>Then, you can choose the minimum and maximum words you want per sentence. </p>

                    <p>Later, you can select the minimum and maximum sentences you want per paragraph.</p>

                    <p>Finally, click on the button ‘generate’ </p>

                    <p>Taddalaa!</p>

                    <p>You got your Lorem Ipsum content for your website. </p>    
                </Box>    
            </Container>
            <Footer />
        </main>
     )
}

export default BlogPage;

export const Head = () => <title>Blog Page</title>