// import React from 'react';
// import PropTypes from 'prop-types';

// export default function LazyFactory({ path, children, fallback = null }) {
//   const Component = React.lazy(() => import(path));
//   return (
//     <React.Suspense fallback={fallback}>{children(Component)}</React.Suspense>
//   );
// }

// LazyFactory.propTypes = {
//   path: PropTypes.string.isRequired,
//   children: PropTypes.func.isRequired,
//   fallback: PropTypes.any
// };

import React from 'react';
import PropTypes from 'prop-types';

export default function LazyFactory(path) {
  const Component = React.lazy(() => import(path));
  function Suspense({ children, fallback }) {
    return (
      <React.Suspense fallback={fallback}>{children(Component)}</React.Suspense>
    );
  }
  Suspense.propTypes = {
    children: PropTypes.func.isRequierd,
    fallback: PropTypes.any
  };
  Suspense.defaultProps = {
    fallback: null
  };
  return Suspense;
}
