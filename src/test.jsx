return (
    <>
      <div className="container">
        <section className="mb-3">
          <label htmlFor="fromSelect" className="form-label">
            From : ({from}){" "}
          </label>
          <select
            onChange={(e) => setFrom(e.target.value)}
            className="form-select"
            id="fromSelect"
          >
            {option.map((op) => (
              <option key={op.code} value={op.code}>
                {op.name}
              </option>
            ))}
          </select>
          <label htmlFor="toSelect" className="form-label">
            To : ({to})
          </label>
          <select
            onChange={(e) => setTo(e.target.value)}
            className="form-select"
            id="toSelect"
          >
            {option.map((op) => (
              <option key={op.code} value={op.code}>
                {op.name}
              </option>
            ))}
          </select>
        </section>

        <div className="mb-3">
          <textarea
            className="form-control"
            cols="60"
            rows="9"
            onInput={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            cols="60"
            rows="9"
            value={translatedText}
          ></textarea>
        </div>

        <div className="mb-3">
          <button onClick={e=>translate()} className="btn btn-primary">Translate</button>
        </div>
      </div>