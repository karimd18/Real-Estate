import React, { useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';

const ScrollToTop = ({ children, trigger }) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (trigger && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [trigger]);

  return (
    <ScrollView ref={scrollViewRef} style={{ flex: 1 }}>
      {children}
    </ScrollView>
  );
};

export default ScrollToTop;
