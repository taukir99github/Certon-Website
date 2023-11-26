import React from "react";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles["hole-container"]}>
      <div className={styles["img-container"]}>
        <div className={styles["cont1"]}>
          <h1 className={styles["heading"]}>The Ultimate Digital Navigator</h1>
          <p className={styles["paragraph1"]}>
            Certon technologies create a strong signature in the cutting-edge
            technological landscape to navigate the challenges and open up a new
            world
          </p>

          <div className={styles["btn"]}>
            <div>
              <button type="button" className={styles["button1"]}>
                Get Quote Now
              </button>
            </div>
            <div>
              <button type="button" className={styles["button2"]}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["grow-container"]}>
        <div>
          <h2 className={styles["hea1"]}>Grow With Us</h2>
          <p className={styles["content"]}>
            {" "}
            Certon’s experts help businesses to grow globally.
          </p>
        </div>
        <div className={styles["cart-container"]}>
          <div className={styles["img1"]}>
            <div className={styles["width"]}>
              <h4 className={styles["text1"]}>
                Where Innovation & Collaboration Meets
              </h4>
            </div>
          </div>
          <div className={styles["img2"]}>
            <div className={styles["width"]}>
              <h4 className={styles["text1"]}>
                Creating a Vibrant Work Culture
              </h4>
            </div>
          </div>
          <div className={styles["img3"]}>
            <div className={styles["width"]}>
              <h4 className={styles["text1"]}>Making a Difference</h4>
            </div>
          </div>

          <div className={styles["img4"]}>
            <div className={styles["width"]}>
              <h4 className={styles["text1"]}>Powerful Partnership</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["img1-container"]}>
        <div className={styles["content"]}>
          <h2 className={styles["hea1"]}>About Certon</h2>
          <p className={styles["paragraph"]}>
            {" "}
            Certon Technologies is a trusted and top IT consulting services
            provider headquartered in Pune and a corporate office in Bangalore.
            By adopting the latest technologies available today, we create
            wonders in the ever-evolving digital landscape. We are highly
            committed to delivering various services involved in IT, HR, Sales &
            Marketing, and Digital marketing platforms. With a client-focused
            approach, Certon Technologies aims to establish the organizations by
            optimizing their technological infrastructure and prospering the
            business by creating a high return on investment. Our dedicated team
            is ready to serve you with the top-notch technologies available in
            the market. They work closely with the clients and give valuable
            advice and suggestions to sustain the best possible outcomes in
            their business.
          </p>
        </div>
      </div>
      <div className={styles["row-images"]}>
        <div className={styles["row1"]}>
          <h2 className={styles["hea2"]}>Our Vision</h2>
          <p className={styles["paragraph"]}>
            Our vision is to be a trusted partner of your business always. Also,
            we envision a future where our technology, strategies, innovations,
            and planning help in shaping your business in a single click
          </p>
        </div>
        <div className={styles["row2"]}>
          <h2 className={styles["hea2"]}>Our Mision</h2>
          <p className={styles["paragraph"]}>
            Our mission is to empower your business growth by leveraging our
            experience in the IT industry and the ever-evolving digital
            landscape.
          </p>
        </div>
      </div>
      <div className={styles["img2-container"]}>
        <h1 className={styles["head"]}>What Makes Us Different</h1>
        <div className={styles["row-images1"]}>
          <div className={styles["icons"]}>
            <div>
              <img
                src="https://res.cloudinary.com/dhgxxmrws/image/upload/v1700721741/Vector_1_c8n7qi.png"
                alt="img"
                className={styles["img"]}
              />
            </div>
            <div>
              <p className={styles["text"]}>
                Providing world-class products and services
              </p>
            </div>
          </div>
          <div className={styles["icons"]}>
            <div>
              <img
                src="https://res.cloudinary.com/dhgxxmrws/image/upload/v1700722018/icon__money_alt_cash_currency__pjgqvm.png"
                alt="img"
                className={styles["img"]}
              />
            </div>
            <div>
              <p className={styles["text"]}>
                cost-effective business consulting
              </p>
            </div>
          </div>
          <div className={styles["icons"]}>
            <div>
              <img
                src="https://res.cloudinary.com/dhgxxmrws/image/upload/v1700722545/icon__analytics_graph_chart__kcuqva.png"
                alt="img"
                className={styles["img"]}
              />
            </div>
            <div>
              <p className={styles["text"]}>Result-oriented services</p>
            </div>
          </div>
          <div className={styles["icons"]}>
            <div>
              <img
                src="https://res.cloudinary.com/dhgxxmrws/image/upload/v1700722715/icon__apps__yg9xef.png"
                alt="img"
                className={styles["img"]}
              />
            </div>
            <div>
              <p className={styles["text"]}>Work with advanced technologies</p>
            </div>
          </div>
          <div className={styles["icons"]}>
            <div>
              <img
                src="https://res.cloudinary.com/dhgxxmrws/image/upload/v1700722882/icon__headphone_music_alt__ql3ooo.png"
                alt=""
                className={styles["img"]}
              />
            </div>
            <div>
              <p className={styles["text"]}>Work with advanced Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
