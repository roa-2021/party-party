import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchCocktail } from '../actions'

// imp actionCreator to dispatch API req.

const Form = ({ dispatch }) => {
  // this stuff will need to be replaced with some weird array state to track all of the people's requests
  const [userName, setUserName] = useState('')
  const [userIngr, setUserIngr] = useState('')

  // funcs to take input and dispatch req.

  const formSubmit = e => {
    e.preventDefault()
    console.log(
      `formSubmit for something with ${userIngr} for a beautiful ${userName}`
    )
    //dispatching to the THUNK to receive data from the API
    dispatch(fetchCocktail(userIngr))
  }

  const addPerson = () => console.log('addPerson yo')

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div class="row">
          <div className="input-group d-flex justify-content-center mt-3">
            <div class="col">
              <div className="form-floating me-auto">
                <input
                  id="floatingInput"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="name"
                  required
                  onChange={e => setUserName(e.target.value)}
                />
                <label for="floatingInput">Name</label>
              </div>
            </div>
            <div class="col">
              <div className="form-floating ms-auto">
                <input
                  className="form-control form-control-lg "
                  type="text"
                  placeholder="desired ingredient"
                  required
                  onChange={e => setUserIngr(e.target.value)}
                />
                <label for="floatingInput">Desired Ingredient</label>
              </div>
            </div>
          </div>
          <div className="input-group d-flex justify-content-center mt-2 mb-2">
            <button
              className="btn btn-lg btn-success me-auto"
              type="button"
              onClick={addPerson}
            >
              +
            </button>
            <button className="btn btn-lg btn-primary ms-auto" type="submit">
              Party PARTY!!
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(Form)
