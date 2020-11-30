import React from 'react';
import Header from '../Header/Header';
import './Blog.css'
import blogImg1 from '../New-folder/Image/Rectangle 26.png'
import blogImg2 from '../New-folder/Image/Rectangle 27.png'
import blogImg3 from '../New-folder/Image/Rectangle 28.png'
const Blog = () => {
    return (
        <div>
            <div className="blog-container">
            <Header></Header>
                <h1>TRAVEL</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas enim rem itaque dolorum odio necessitatibus, aperiam hic non perferendis voluptates?</p>
                <input className = "blog-btn" value = "JOIN US" type="button"/>
            </div>
            <div className="">
                <div className="">
                <h3>About Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, obcaecati aperiam. Nesciunt veritatis numquam assumenda repellendus deserunt voluptatem laboriosam praesentium.</p>
                </div>


                <div className="">
                    <div className="">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illum veritatis modi accusantium quidem ipsa quia dolor explicabo iste perferendis.</p>
                        <div className="">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illum veritatis modi accusantium quidem ipsa quia dolor explicabo iste perferendis.</p>
                        <div className="">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illum veritatis modi accusantium quidem ipsa quia dolor explicabo iste perferendis.</p>
                        <div className="">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illum veritatis modi accusantium quidem ipsa quia dolor explicabo iste perferendis.</p>
                        <div className="">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
                <div className="">
                    <div className="">
                        <img src={blogImg1} alt=""/>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit,</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro a unde dolor, odio culpa labore magni. Tempora nostrum dolor delectus.</p>
                    </div>
                    <div className="">
                    <img src={blogImg2} alt=""/>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit,</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro a unde dolor, odio culpa labore magni. Tempora nostrum dolor delectus.</p>
                    </div>
                    <div className="">
                    <img src={blogImg3} alt=""/>
                    </div>
                    <div className="">
                    <h3>Lorem ipsum dolor sit,</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro a unde dolor, odio culpa labore magni. Tempora nostrum dolor delectus.</p>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <h1>why you choose us?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore in asperiores voluptatibus iure tempora totam illum fugit provident sit atque voluptate magnam delectus quia reiciendis dignissimos fuga sunt et necessitatibus voluptatum. 
                        <br/>
                        Laborum neque asperiores, assumenda doloribus quae debitis natus, voluptatum alias hic, cupiditate aliquid provident aut in quas mollitia!</p>
                        <h3>Get start</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptate.</p>
                        <br/>
                        <br/>
                        <p>Phone:</p>
                        <p>Address:</p>
                        <p>Mail:</p>
                    </div>
                    <div className=""></div>
                </div>
        </div>
    );
};

export default Blog;