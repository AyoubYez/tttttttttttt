// import React from "react";
import "./style/web page.css";

function Home() {
  return (
    <div>
      <header>
        <img src="./assets/nest_marketing.svg" alt="" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Kid</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="" className="add_product">
              add product
            </a>
          </li>
        </ul>
      </header>
      <main>
        <div className="nest_description container">
          <h1>
            With <span className="highlight">nest</span> reduce the <br />
            COD problems using <span className="highlight">BLF</span>
          </h1>
          <p>
            BLF stand for black list filter is a solution for you so you can
            filter your clients depending on there risk ratio
          </p>
          <a href="" className="test_blf">
            test BLF
          </a>
        </div>
        <div className="your_product">
          <h2 className="title">
            <span className="highlight">your </span> product
          </h2>
          <div className="product_table">
            <div className="container">
              <div className="left-section">
                <h3>Veste Femme Zara</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button>Edit</button>
              </div>

              <div className="right-section">
                <div className="card">
                  <h3>Veste Home LV</h3>
                  <p>Lorem Ipsum is simply dummy</p>
                  <button>Edit</button>
                </div>
                <div className="card">
                  <h3>Veste Home LV</h3>
                  <p>Lorem Ipsum is simply dummy</p>
                  <button>Edit</button>
                </div>
                <div className="card">
                  <h3>Veste Home LV</h3>
                  <p>Lorem Ipsum is simply dummy</p>
                  <button>Edit</button>
                </div>
                <div className="card">
                  <h3>Veste Home LV</h3>
                  <p>Lorem Ipsum is simply dummy</p>
                  <button>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <h2 className="title">
            <span className="highlight"> last </span> product board
          </h2>
          <table>
            <thead>
              <tr>
                <th className="checkbox-cell">
                  <input type="checkbox" />
                </th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Size</th>
                <th>Color</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td className="icon-cell">
                  <img src="https://via.placeholder.com/32" alt="Profile" />
                </td>
                <td>Table Cell</td>
                <td>0666666666</td>
                <td>Bousaada</td>
                <td>
                  <span className="badge">xl</span>
                </td>
                <td className="green">Green</td>
                <td>3</td>
              </tr>
              <tr>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td className="icon-cell">
                  <img src="https://via.placeholder.com/32" alt="Profile" />
                </td>
                <td>Table Cell</td>
                <td>0666666666</td>
                <td>Bousaada</td>
                <td>
                  <span className="badge">xl</span>
                </td>
                <td className="green">Green</td>
                <td>3</td>
              </tr>
              <tr className="selected">
                <td className="checkbox-cell">
                  <input type="checkbox" checked />
                </td>
                <td className="icon-cell">
                  <img src="https://via.placeholder.com/32" alt="Profile" />
                </td>
                <td>Table Cell</td>
                <td>0666666666</td>
                <td>Bousaada</td>
                <td>
                  <span className="badge">xl</span>
                </td>
                <td className="green">Green</td>
                <td>3</td>
              </tr>
              <tr>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td className="icon-cell">
                  <img src="https://via.placeholder.com/32" alt="Profile" />
                </td>
                <td>Table Cell</td>
                <td>0666666666</td>
                <td>Bousaada</td>
                <td>
                  <span className="badge">xl</span>
                </td>
                <td className="green">Green</td>
                <td>3</td>
              </tr>
              <tr>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td className="icon-cell">
                  <img src="https://via.placeholder.com/32" alt="Profile" />
                </td>
                <td>Table Cell</td>
                <td>0666666666</td>
                <td>Bousaada</td>
                <td>
                  <span className="badge">xl</span>
                </td>
                <td className="green">Green</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <a href="" className="test_blf">
            view all boards{" "}
          </a>
        </div>
      </main>
      <footer
        style="
        background-color: #222;
        color: #fff;
        padding: 20px 0;
        font-family: Arial, sans-serif;
      "
      >
        <div
          style="
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        "
        >
          <div style="flex: 1; margin: 10px; min-width: 200px">
            <h2 style="font-size: 18px; margin-bottom: 10px">
              <img src="./assets/hexashop.png" alt="" />
            </h2>
            <p style="margin: 5px 0">Address: Lahore Road, Sheikhupura</p>
            <p style="margin: 5px 0">E-mail: Example@gmail.com</p>
            <p style="margin: 5px 0">Phone: 0092 356 3656210</p>
          </div>
          <div style="flex: 1; margin: 10px; min-width: 200px">
            <h2 style="font-size: 18px; margin-bottom: 10px">
              Shopping and Categories
            </h2>
            <p style="margin: 5px 0">Men Shopping</p>
            <p style="margin: 5px 0">Women Shopping</p>
            <p style="margin: 5px 0">Kid Shopping</p>
          </div>
          <div style="flex: 1; margin: 10px; min-width: 200px">
            <h2 style="font-size: 18px; margin-bottom: 10px">Useful Links</h2>
            <p style="margin: 5px 0">Homepage</p>
            <p style="margin: 5px 0">About Us</p>
            <p style="margin: 5px 0">Help</p>
            <p style="margin: 5px 0">Contact Us</p>
          </div>
          <div style="flex: 1; margin: 10px; min-width: 200px">
            <h2 style="font-size: 18px; margin-bottom: 10px">
              Help & Information
            </h2>
            <p style="margin: 5px 0">FAQ</p>
            <p style="margin: 5px 0">Shipping</p>
            <p style="margin: 5px 0">Tracking ID</p>
          </div>
        </div>
        <div
          style="
          text-align: center;
          background-color: #000;
          padding: 10px 0;
          margin-top: 20px;
        "
        >
          <p style="margin: 0">Copyright © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
