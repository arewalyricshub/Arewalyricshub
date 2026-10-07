import React, { useState } from 'react';

function Tabs({
  tabs = [],
  defaultTab,
  activeTab,
  onChange,
  className = '',
}) {
  const firstTab = tabs[0]?.id || '';

  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab || firstTab
  );

  const currentTab =
    activeTab !== undefined
      ? activeTab
      : internalActiveTab;

  const handleTabChange = (tabId) => {
    if (activeTab === undefined) {
      setInternalActiveTab(tabId);
    }

    onChange?.(tabId);
  };

  const activeTabData = tabs.find(
    (tab) => tab.id === currentTab
  );

  return (
    <div className={`ui-tabs ${className}`}>
      <div
        className="ui-tabs-list"
        role="tablist"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={currentTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={`ui-tab ${
              currentTab === tab.id ? 'ui-tab-active' : ''
            }`}
            onClick={() => handleTabChange(tab.id)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTabData && (
        <div
          id={`tabpanel-${activeTabData.id}`}
          className="ui-tab-panel"
          role="tabpanel"
          tabIndex={0}
        >
          {activeTabData.content}
        </div>
      )}
    </div>
  );
}

export default Tabs;
