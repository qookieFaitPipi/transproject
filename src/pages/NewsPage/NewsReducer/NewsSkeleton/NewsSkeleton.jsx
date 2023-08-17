import React from 'react'
import ContentLoader from 'react-content-loader'

const NewsSkeleton = props => (
  <ContentLoader
    viewBox="0 0 400 200"
    width={1400}
    height={600}
    title="Loading news..."
    {...props}
  >
    <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
    <rect x="192.84" y="9.67" rx="5" ry="5" width="148.72" height="12.12" />
    <rect x="192.84" y="25.67" rx="5" ry="5" width="148.72" height="70" />

    <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
    <rect x="192.84" y="107" rx="5" ry="5" width="148.72" height="12.12" />
    <rect x="192.84" y="123" rx="5" ry="5" width="148.72" height="70" />
  </ContentLoader>
)

export default React.memo(NewsSkeleton);