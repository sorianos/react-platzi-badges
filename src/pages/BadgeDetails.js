import React from 'react';
import { Link } from 'react-router-dom';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import './styles/BadgeDetails.css';

function useIncreaseCount(max) {
  const [ count, setCount ] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails({ 
  badge, 
  modalIsOpen, 
  onCloseModal,
  onDeleteBadge,
  onOpenModal 
}) {
  const [count, setCount] = useIncreaseCount(4);
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button 
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary"
                >
                  Increase Count : {count}
                </button>
              </div>
              <div>
                <Link
                  className="btn btn-primary mr-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button 
                  onClick={onOpenModal}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <DeleteBadgeModal 
                  isOpen={modalIsOpen}
                  onClose={onCloseModal}
                  onDeleteBadge={onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
