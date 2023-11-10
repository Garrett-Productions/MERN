import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const {peepOrPlan, setPeepOrPlan} = props;
    const {id, setID} = props;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${peepOrPlan}/${id}`); // to parse variables into our stringg
    };

    return (
    <div className='container border margin:10'>
        <form onSubmit={handleSubmit}> 
            <label>
                Choose your person or planet here: {" "}</label>
            <select class="form-control" onChange={(e) => setPeepOrPlan(e.target.value)} >
                <option value="">~~~~~</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>
                id</label>
            <input class="form-control" type='number' onChange={(e) => setID(e.target.value)} />
            <button className='btn btn-primary'type='submit'>Search</button>
        </form>
    </div>
    )
}

export default Form;