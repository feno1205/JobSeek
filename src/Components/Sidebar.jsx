import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className='container ms-3 mb-5'>
                <h5 className='text-center pt-3'>Filters</h5>
                <div>
                    <label  style={{fontWeight:'600'}} className='pt-3 mb-3'>Date posted</label><br />
                    <input type="radio" /><span>Last 24 hours</span><br />
                    <input type="radio" /><span>Last week</span><br />
                    <input type="radio" /><span>Last month</span>
                </div>
                <div>
                    <label  style={{fontWeight:'600'}} className='pt-3 mb-3'>Experience level</label><br />
                    <input type="checkbox" /><span>Internship</span><br />
                    <input type="checkbox" /><span>Entry-level</span><br />
                    <input type="checkbox" /><span>Mid-level</span><br />
                    <input type="checkbox" /><span>senior-level</span>
                </div>
                <div>
                    <label  style={{fontWeight:'600'}} className='pt-3 mb-3'>Job-type</label><br />
                    <input type="checkbox" /><span>Full-Time</span><br />
                    <input type="checkbox" /><span>Part-Time</span>
                </div>
                <div>
                    <label  style={{fontWeight:'600'}} className='pt-3 mb-3'>Work mode</label><br />
                    <input type="checkbox" /><span>On-site</span><br />
                    <input type="checkbox" /><span>Remote</span><br />
                    <input type="checkbox" /><span>Hybrid</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar