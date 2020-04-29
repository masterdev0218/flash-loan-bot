import React, { useState, useEffect, useRef } from 'react'
import { PageHeader } from 'antd';

export default function Header(props) {
  return (
    <div>
      <PageHeader
        title="🏗 scaffold-eth"
        subTitle="forkable Ethereum dev stack focused on fast product iteration"
      />
    </div>
  );
}
