function Person(props) {
    return(
        <div className="person">
            <h1>Julian</h1>
            <p>Age: 25</p>
        </div>
    );
}

ReactDOM.render(<Person />, document.querySelector('#p1'))