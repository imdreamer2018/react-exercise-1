import React, { Component } from 'react';
import List from './List/List';
import './Education.scss';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          id: 1,
          year: 1990,
          desc: [
            {
              born: 'I was born in katowice',
              bornDesc:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
            },
          ],
        },
        {
          id: 2,
          year: 2005,
          desc: [
            {
              born: 'Secondary school specializing in artistic',
              bornDesc:
                'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
            },
          ],
        },
        {
          id: 3,
          year: 2009,
          desc: [
            {
              born: 'First level graduation in Graphic Design',
              bornDesc:
                'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores underepellat.',
            },
          ],
        },
        {
          id: 4,
          year: 2015,
          desc: [
            {
              born: 'Second level graduation in Graphic Design',
              bornDesc: 'Ducimus, aliquam tempore autem itaque et accusantium!',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className={'educations'}>
        <div className={'education-header'}>EDUCATION</div>
        {this.state.educations.map((education) => (
          <List
            key={education.id}
            year={education.year}
            desc={education.desc}
          />
        ))}
      </div>
    );
  }
}

export default Education;
