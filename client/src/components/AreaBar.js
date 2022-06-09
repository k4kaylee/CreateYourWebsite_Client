import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const AreaBar = () => {
    const { course } = useContext(Context);

    return (
        <div className='row' style={{ marginLeft: "-100px", width: "855px", backgroundColor: "white" }}>
            {course.areas.map(area =>
                <div
                    key={area.id}
                    className="col"
                    // style={{ width: "100%" }}
                    onClick={() => course.setSelectedArea(area)}
                    border={area.id === course.selectedArea.id ? 'danger' : 'light'}
                >
                    {area.name}
                </div>
            )}
        </div>

    );
};

export default AreaBar;