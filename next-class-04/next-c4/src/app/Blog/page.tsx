import Link from "next/link";
function Blog() {
  return (
    <div>


<Link href={'/'}>Home</Link>
        <Link href={'/ContactUs'}>Contact Us</Link>
        <Link href={'/Menu'}>Menu</Link>
        <Link href={'/About'}>About</Link>
        <div>
        <br />
       <br />
       <br />
       <br />
       <br />
<p>A high level company in the world which name is TECHLOSET Solution waiting to solve people daily faced problems .Which is the No 1 Company in pakistan at Faisalakbad. We can create every kind  blog which would be very fancy attract people attraction. </p>
    <br />
    <br />
    <br />
    <br />
      

      <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
       <Link href="/about">Our Facilities</Link>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="facilities-col">
                <img src="/img/libary.png" alt=""/>
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="/img/playground.png" alt=""/>
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <img src="/img/food.png" alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>
    {/* <!-- Facilities Section End --> */}

    {/* <!-- Testimonials Section Start --> */}
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="testimonials-col">
                <img src="/img/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <img src="/img/user.png" alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>
    </div>

    </div>
  )
}
export default Blog;