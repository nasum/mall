import React from 'react'

type Props = {
  handleSetWebsite: (website: string) => void
}

export default function URLForm(props: Props) {
  const [url, setUrl] = React.useState('')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    props.handleSetWebsite(url)
    setUrl('')
  }

  return (
    <form>
      <div className="flex gap-x-1">
        <input
          className="border-solid border-2 border-gray-300 rounded p-2"
          type="text"
          placeholder="https://example.com"
          onChange={handleInputChange}
        />
        <button
          className="align-baseline bg-blue-500 font-bold rounded p-2 text-white"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </form>
  )
}
