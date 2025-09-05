import { Link, useParams } from 'react-router-dom';
import { Person } from '../../types';
import classNames from 'classnames';

type Props = {
  people: Person[];
  person: Person;
};

export const PeopleLink: React.FC<Props> = ({ person, people }) => {
  const mother = people.find(p => p.name === person.motherName);
  const father = people.find(p => p.name === person.fatherName);
  const { slug } = useParams();

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': slug === person.slug,
      })}
    >
      <td>
        <Link
          to={`/people/${person.slug}`}
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {!person.motherName ? (
          '-'
        ) : mother ? (
          <Link to={`/people/${mother.slug}`} className="has-text-danger">
            {person.motherName}
          </Link>
        ) : (
          person.motherName
        )}
      </td>
      <td>
        {!person.fatherName ? (
          '-'
        ) : father ? (
          <Link to={`/people/${father.slug}`}>{person.fatherName}</Link>
        ) : (
          person.fatherName
        )}
      </td>
    </tr>
  );
};
