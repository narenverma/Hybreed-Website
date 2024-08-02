import React, { useEffect } from 'react'
import { CustomBtn } from '../../assets/css/globalStyle'
import { Link } from 'react-router-dom'
import { PageNotFoundSection } from './styled'
import { SectionTopSpace } from '../../utils/contants'
import { CustomCursorAnim } from '../../components/HoverInteract'

export default function NotFoundPage() {
    
    useEffect(() => {
        SectionTopSpace();
        CustomCursorAnim();
      }, [])

  return (
    <>
    <PageNotFoundSection className="hero-section curve-bg-black-secondary next-section-curve ">
        <div className="container">
            <div className="equal-padding-T equal-padding-B">
    <h1 className='text-center mb-4'>404</h1>
    <h4 className='text-center mb-5'>Page Not Found</h4>
    <CustomBtn className='text-center hero-cta'>
                                <Link to='/'>Back to home</Link>{" "}
                            </CustomBtn>
                
            </div>
        </div>
    </PageNotFoundSection>
    </>
  )
}
