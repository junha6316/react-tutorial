import { useHistory } from 'react-router-dom';

function GoBackBtn() {
  const history = useHistory();
  return (
    <div>
      <button onClick={history.goBack}>&larr;</button>
    </div>
  );
}

export default GoBackBtn;
