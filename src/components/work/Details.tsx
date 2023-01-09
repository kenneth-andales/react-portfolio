import React from 'react'
import { IWork } from '../../ts-interfaces'
import { FaShareSquare, FaGithub } from 'react-icons/fa'
import { Popover } from 'antd'

const Details = ({ info }: { info: IWork }) => {
  const hasWebsite: boolean = info.website.trim() ? true : false
  const hasRepo: boolean = info.repository.trim() ? true : false

  return (
    <div className='details'>
      <p className='title'>{info.title}</p>
      <p className='type'>{`${info.developmentType} Development`}</p>
      <p>{info.description}</p>
      <div className='techno-container'>
        <ul className='techno'>
          {info.technologies.map((technology: string, index: number) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
      <ul className='links'>
        <li>
          <Popover
            color={'#E45323'}
            arrowPointAtCenter
            content={
              <div>
                <p>{info.repository || 'Not uploaded to github'}</p>
              </div>
            }
            title={hasRepo && <p className='popup-title'>Redirect to</p>}
            overlayClassName='popup link'
            placement='bottomLeft'
            trigger='hover'>
            <a
              target='_blank'
              href={info.repository}>
              <FaGithub />
            </a>
          </Popover>
        </li>
        <li>
          <Popover
            color={'#E45323'}
            arrowPointAtCenter
            content={
              <div>
                <p>{info.website || 'Not deployed!'}</p>
              </div>
            }
            title={hasWebsite && <p className='popup-title'>Redirect to</p>}
            overlayClassName='popup link'
            placement='bottomLeft'
            trigger='hover'>
            {hasWebsite ? (
              <a
                target='_blank'
                href={info.website}>
                <FaShareSquare />
              </a>
            ) : (
              <a>
                <FaShareSquare />
              </a>
            )}
          </Popover>
        </li>
      </ul>
    </div>
  )
}

export default Details
