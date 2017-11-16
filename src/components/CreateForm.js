import React from 'react'
import PropTypes from 'prop-types'

import gen from 'nanoid/generate'

export default class CreateForm extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    successMessage: '',
    errorMessage: '',
  }

  state = {
    title: '',
  }

  handleTitleChange = (e) => {
    const eTitle = e.target.value
    const trimmedTitle = eTitle.replace(/^\s+/, '').replace(/\s+$/, '')
    if (trimmedTitle === '') {
      this.setState({ title: '' })
    } else {
      this.setState({ title: eTitle })
    }
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <input
          className="create--input"
          value={this.state.title}
          placeholder="Poll Title"
          id="title"
          autoComplete="off"
          autoFocus
          maxLength={84}
          onChange={e => this.handleTitleChange(e)}
        />
        <button
          onClick={(event) => {
            event.preventDefault()
            const quickId = gen('1234567890abcdefghijklmnopqrstuvwxyz', 5).toUpperCase()
            return this.props.onSubmit({ title, quickId })
          }}
        >
          {title}
        </button> <br />
        title: {this.props.title} <br />
        success: {this.props.successMessage} <br />
        failure: {this.props.errorMessage} <br />
        { this.props.loading &&
          'its loading' } <br />
      </div>
    )
  }
}