import React from 'react'
import PropTypes from 'prop-types'

function SectionTitle({title, children}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SectionTitle
