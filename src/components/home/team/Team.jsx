import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Featured Builders"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          <div className="content mtop grid3">
            {/* Check if team exists and is an array */}
            {team?.length > 0 ? (
              team.map((val, index) => (
                <div className="box" key={index}>
                  <button className="btn3">{val.list} Listings</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt={val.name} />
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon?.map((icon, iconIndex) => (
                        <li key={iconIndex}>{icon}</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button>
                        <i className="fa fa-home"></i>
                        Find Your Dream Home
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No team members available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
