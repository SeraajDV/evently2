import React from 'react'

const EventDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section event-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Event Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quisquam veritatis hic exercitationem reprehenderit quis nulla nam tenetur, voluptatem facilis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by A Person</div>
                    <div>11th September, 6pm</div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;
