import { useState } from 'react';

// ==========================================================================
// useAccordion — tracks which single item id is open. Reusable anywhere
// an accordion pattern is needed (FAQ, expandable lists, etc).
// ==========================================================================

export function useAccordion(initialOpenId = null) {
  const [openId, setOpenId] = useState(initialOpenId);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const isOpen = (id) => openId === id;

  return { openId, toggle, isOpen };
}
