import Todo from '../components/Todo';


function HomePage() {
    return ( 
    < section > 
        <h1>My Todos</h1>
        <Todo text ='LEARN REACT'/>
        <Todo text ='MASTERING REACT'/>
        <Todo text ='EXPLORE REACT'/>
    </section>
    );
}

export default HomePage;
