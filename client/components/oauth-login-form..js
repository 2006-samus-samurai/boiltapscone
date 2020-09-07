import React from 'react'

const OAuthLoginForm = () => (
  <form method="get" action="/auth/google">
    <br />
    <button type="submit" className="btn btn-primary white p-0 mr-1 rounded">
      Log in with Google
    </button>
  </form>
)

export default OAuthLoginForm
