import Head from 'next/head';
import styles from './/form.module.css';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Form() {
    
    return ( 

    <form id="form">
        <h3>Before we help you grow, we need to learn where you're at. Take this
            quick survey to assess your current comfort zone! It shouldn't 
            take more than 5 minutes.
        </h3>

		<div className="form-control">
			<label htmlFor="age" id="label-age">
				Age
			</label>

			<input type="text"
				id="age"
				placeholder="Enter your age" />
		</div>

        <div className="form-control">
            <label htmlFor="race" id="label-race">
				Which race/ethnicity best describes you?
			</label>
            <label htmlFor="white">
                White / Caucasian
            </label>
            <input type="radio"
                    id="white"
                    name="race"></input>
            <label htmlFor="asian">
                Asian / Pacific Islander
            </label>
            <input type="radio"
                    id="asian"
                    name="race"></input>
            <label htmlFor="black">
                Black or African American
            </label>
            <input type="radio"
                    id="black"
                    name="race"></input>
            <label htmlFor="hispanic">
                Hispanic / Latino
            </label>
            <input type="radio"
                    id="hispanic"
                    name="race"></input>
            <label htmlFor="American Indian">
                American Indian or Alaskan Native
            </label>
            <input type="radio"
                    id="American Indian"
                    name="race"></input>
            <label htmlFor="Other">
                Multiple Ethnicity / Other (please specify)
            </label>
            <input type="radio"
                    id="other"
                    name="race"></input>
                    <input type="text" id="other"/>
        </div>
        <div className="form-control">
            <label htmlFor="role" id="label-role">
                Highest level of education
            </label>
             
            <select name="role" id="role">
                <option value="highschool">High School (GED)</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="doctarate">Ph.D</option>
                <option value="other">Other</option>
            </select>
        </div>

		<div className="form-control">
            <label>
				How likely are you to talk to a stranger?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>

        <div className="form-control">
            <label>
				On a scale of 1 to 5  how many people do you hang out with on a 
                weekly basis? 1 being less than 5 and 5 being more than 25.
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>

        <div className="form-control">
            <label>
				How likely are you to talk to someone 
                if you are attracted to them?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				Do you go out of your way to talk to people?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How likely are you to go out to a party?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How likely are you to sing at a karaoke night?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How picky are you with your food?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How many deserts do you eat in a day?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How often would you go out of your way to try out new foods?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How likely are you to leave your city/hometown to see something new?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How often do you find yourself in nature?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How likely are you to learn skills outside of your specialty?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>
        <div className="form-control">
            <label>
				How many books do you read in a month?
			</label>

            <label htmlFor="likely-1">
                1
            </label>
            <input type="radio"
                    id="likely-1"
                    name="likely"></input>
            <label htmlFor="likely-2">
                2
            </label>
            <input type="radio"
                    id="likely-2"
                    name="likely"></input>
            <label htmlFor="likely-3">
                3
            </label>
            <input type="radio"
                    id="likely-3"
                    name="likely"></input>
            <label htmlFor="likely-4">
                4
            </label>
            <input type="radio"
                    id="likely-4"
                    name="likely"></input>
            <label htmlFor="likely-5">
                5
            </label>
            <input type="radio"
                    id="likely-5"
                    name="likely"></input>
		</div>

		<button className={"banana " + styles.myStyle} ><a href="/">
			Submit
            </a></button>
	</form>
    )
}