import React, { useContext } from 'react';
import { UserContext } from '../pages/Auth/AuthContext';

const Blog = () => {
    // const { user } = useContext(UserContext)
    return (
        <div className='w-4/6 mx-auto my-5'>
            <div className="collapse bg-secondary text-primary">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>When you have state management in place data actually flows from your app to state and vice versa. You know exactly where your data is. These state management tools also give you a point-in-time snapshot of the entire data. In that way, you know exactly where your data is and that makes your development faster.</p>
                </div>
            </div>
            <div className="collapse bg-secondary text-primary">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div className="collapse bg-secondary text-primary">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="collapse bg-secondary text-primary">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                        React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                        Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.
                        AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;